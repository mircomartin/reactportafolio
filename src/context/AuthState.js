import React, {useReducer} from 'react'

//Swet Alert2
import Swal from 'sweetalert2';

//Firebase
import { firebase, db } from './../firebase/firebase-config'

//Context
import authReducer from './authReducer';
import { AuthContext } from './AuthContext';
import { types } from './types';

//Helpers
import { fileUpload } from '../helpers/fileUpload';
import { loadNews } from '../helpers/loadNews';

export const AuthState = (props) => {

        const initialState = {
            logged: null,
            user: null,
            news: [],
        }
    
        const [ state, dispatch ] = useReducer(authReducer, initialState);

        //Async functions
        const startLoginUser = async (email, password) => {
            try {
                const resp = await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password);
    
                const { user } = resp;
                await user.updateProfile({ displayName: 'Mirco' });
    
                const uid = user.uid;
                const name = user.displayName;
    
                login(uid, name)
                
            } catch (error) {
                console.log(error);
            }
        }

        const startLogout = async () => {
            try {
                await firebase
                            .auth()
                            .signOut()
                logout()
            } catch (error) {
                console.log(error)
            }
        }

        const startCreateNotice = async (formValues, user) => {
            const { title, subtitle, body } = formValues
            try {

                if (!formValues.img) {
                    formValues.img = '';
                } else {
                    const imgUrl = await fileUpload(formValues.img);
                    formValues.img = imgUrl
                }
                
                const newPost = {
                    title,
                    subtitle,
                    img: formValues.img,
                    body,
                    date: new Date().getTime(),
                    user,
                } 
    
                //submit a firestore
                await db.collection("news").add(newPost);
        
                //Msg Exito
                Swal.fire('Buen Trabajo!', 'La noticia fue cargada!', 'success');

                createNewNotice(newPost)
            } catch (error) {
                console.log(error)
                Swal.fire('ERROR', 'La noticia no pudo ser cargada!', 'error');
            }
        }

        const startListNews = async () => {
            try {
                const resp = await loadNews();
                listNews(resp)
            } catch (error) {
                console.log(error)
                Swal.fire('ERROR', 'Hubo un error', 'error');
            }
        }

        //no async
        const login = (uid, name) => {
            dispatch({
                type: types.login,
                payload: {
                    uid,
                    name,
                },
            });
        }

        const logout = () => {
            dispatch({
                type: types.logout,
            });
        }

        const createNewNotice = (newNotice) => {
            dispatch({
                type: types.newNotice,
                payload: newNotice
            })
        }

        const listNews = (news) => {
            dispatch({
                type: types.listNews,
                payload: news
            })
        }
        return(
            <AuthContext.Provider
                value={{
                    user: state.user,
                    news: state.news,
                    startLoginUser,
                    startLogout,
                    startCreateNotice,
                    startListNews,
                    login

                }}>{props.children}
            </AuthContext.Provider>
    )
}