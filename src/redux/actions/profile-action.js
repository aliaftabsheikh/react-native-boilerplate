import { BASEURL } from "../../api-services/http-provider";
import apiServices from "../../api-services/request-handler";
import { getToken } from "../../utils/auth.util";
import { ModalHandler } from "./modal-action";

export const getUserActivity = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_ACTIVITY_PROGRESS' });
            const response = await apiServices.getUserActivity(`/${id}`)
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'GET_ACTIVITY_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'GET_ACTIVITY_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'GET_ACTIVITY_ERROR' });
            console.log('error', error);
        }
    };
}
export const uploadDpCover = (data, user) => {
    return async dispatch => {
        try {
            const authToken = await getToken()
            dispatch({ type: 'UPLOAD_DP_COVER_PROGRESS' });
            fetch(BASEURL + 'uploadMobileImage', {
                method: "post",
                body: data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': "Bearer " + authToken.key,
                },
            })
                .then(response => response.json())
                .then(json => {
                    console.log("jOSNSSSDtataaa" , json)
                    if (json?.responseCode === 200) {
                        dispatch({ type: 'UPLOAD_DP_COVER_SUCCESS' });
                        user.userInfo.cover = json?.data[0]?.cover
                        user.userInfo.image = json?.data[0]?.image
                        dispatch({ type: 'GET_USER_SUCCESS', payload: user });
                    }
                    else {
                        dispatch({ type: 'UPLOAD_DP_COVER_ERROR' });
                        dispatch(ModalHandler({
                            show: true,
                            message: json?.responseText,
                            type: "Error"
                        }))
                    }
                })
        } catch (error) {
            dispatch({ type: 'UPLOAD_DP_COVER_ERROR' });
            console.log('error', error);
        }
    };
}
export const getUserOtherInfo = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_OTHER_INFO_PROGRESS' });
            const response = await apiServices.getUserOtherInfo(`/${id}`)
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'GET_OTHER_INFO_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'GET_OTHER_INFO_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'GET_OTHER_INFO_ERROR' });
            console.log('error', error);
        }
    };
}
export const updateUserAbout = (data, user, onDone) => {
    return async dispatch => {
        try {
            dispatch({ type: 'UPDATE_USER_ABOUT_PROGRESS' });
            const response = await apiServices.updateAbout(data)
            if (response?.data?.responseCode == 200) {
                if (user) {
                    user.userInfo.about_me = response?.data?.data[0]?.about_me
                }
                dispatch({ type: 'GET_USER_SUCCESS', payload: user });
                dispatch({ type: 'UPDATE_USER_ABOUT_SUCCESS' });
                onDone()
            } else {
                dispatch({ type: 'UPDATE_USER_ABOUT_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'UPDATE_USER_ABOUT_ERROR' });
            console.log('error', error);
        }
    };
}
export const getCategories = () => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_CATEGORIES_PROGRESS' });
            const response = await apiServices.getAllCategories()
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'GET_CATEGORIES_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'GET_CATEGORIES_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'GET_CATEGORIES_ERROR' });
            console.log('error', error);
        }
    };
}
export const getCities = () => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_CITIES_PROGRESS' });
            const response = await apiServices.getAllCities()
            if (response?.data?.responseCode == 200) {

                dispatch({ type: 'GET_CITIES_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'GET_CITIES_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'GET_CITIES_ERROR' });
            console.log('error', error);
        }
    };
}
export const getAreas = () => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_AREAS_PROGRESS' });
            const response = await apiServices.getAllAreas()
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'GET_AREAS_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'GET_AREAS_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'GET_AREAS_ERROR' });
            console.log('error', error);
        }
    };
}
export const getUserProfileView = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_USER_PROFILE_VIEW_PROGRESS' });
            const response = await apiServices.getUserProfileViews(`/${id}`)
            // if (response?.data?.responseCode == 200) {
            dispatch({ type: 'GET_USER_PROFILE_VIEW_SUCCESS', payload: response?.data });
            // } else {
            //     dispatch({ type: 'GET_USER_PROFILE_VIEW_ERROR' });
            //     dispatch(ModalHandler({
            //         show: true,
            //         message: response?.data?.responseText,
            //         type: "Error"
            //     }))
            // }
        } catch (error) {
            dispatch({ type: 'GET_USER_PROFILE_VIEW_ERROR' });
            console.log('error', error);
        }
    };
}
export const getUserPostView = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_USER_POST_VIEW_PROGRESS' });
            const response = await apiServices.getUserPostViews(`/${id}`)
            // if (response?.data?.responseCode == 200) {
            dispatch({ type: 'GET_USER_POST_VIEW_SUCCESS', payload: response?.data });
            // } else {
            //     dispatch({ type: 'GET_USER_POST_VIEW_ERROR' });
            //     dispatch(ModalHandler({
            //         show: true,
            //         message: response?.data?.responseText,
            //         type: "Error"
            //     }))
            // }
        } catch (error) {
            dispatch({ type: 'GET_USER_POST_VIEW_ERROR' });
            console.log('error', error);
        }
    };
}
export const getUserSearchAppearance = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_USER_SEARCH_APPEARANCE_PROGRESS' });
            const response = await apiServices.getUserSearchAppearence(`/${id}`)
            // if (response?.data?.responseCode == 200) {
            dispatch({ type: 'GET_USER_SEARCH_APPEARANCE_SUCCESS', payload: response?.data });
            // } else {
            //     dispatch({ type: 'GET_USER_SEARCH_APPEARANCE_ERROR' });
            //     dispatch(ModalHandler({
            //         show: true,
            //         message: response?.data?.responseText,
            //         type: "Error"
            //     }))
            // }
        } catch (error) {
            dispatch({ type: 'GET_USER_SEARCH_APPEARANCE_ERROR' });
            console.log('error', error);
        }
    };
}
export const getPeopleAlsoViewed = () => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_PEOPLE_ALSO_VIEWED_PROGRESS' });
            const response = await apiServices.getPeopleAlsoViewed()
            // if (response?.data?.responseCode == 200) {
            dispatch({ type: 'GET_PEOPLE_ALSO_VIEWED_SUCCESS', payload: response?.data });
            // } else {
            //     dispatch({ type: 'GET_PEOPLE_ALSO_VIEWED_ERROR' });
            //     dispatch(ModalHandler({
            //         show: true,
            //         message: response?.data?.responseText,
            //         type: "Error"
            //     }))
            // }
        } catch (error) {
            dispatch({ type: 'GET_PEOPLE_ALSO_VIEWED_ERROR' });
            console.log('error', error);
        }
    };
}
export const addSkillInterest = (data, userinfo, onDone) => {
    return async dispatch => {
        try {
            dispatch({ type: 'ADD_SKILL_INTEREST_PROGRESS' });
            const response = await apiServices.addSkillInterest(data)
            console.log("responseeeeeeee", response?.data)
            if (response?.data?.responseCode == 200) {
                if (data.type == "skill") {
                    userinfo.skills = response?.data?.data
                } else {
                    userinfo.interests = response?.data?.data
                }
                dispatch({ type: 'GET_OTHER_INFO_SUCCESS', payload: userinfo });
                dispatch({ type: 'ADD_SKILL_INTEREST_SUCCESS' });
                onDone()
            } else {
                dispatch({ type: 'ADD_SKILL_INTEREST_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'ADD_SKILL_INTEREST_ERROR' });
            console.log('error', error);
        }
    };
}
export const removeSkillInterest = (data, index, array, user_info) => {
    return async dispatch => {
        try {
            dispatch({ type: 'REMOVE_SKILL_INTEREST_PROGRESS' });
            const response = await apiServices.removeSkillInterest(data)
            if (response?.data?.responseCode == 200) {
                let arr = array?.filter((item, ind) => {
                    return ind !== index
                })
                if (data?.type === "skill") {
                    user_info.skills = arr
                } else {
                    user_info.interests = arr
                }
                dispatch({ type: 'GET_OTHER_INFO_SUCCESS', payload: user_info });
                dispatch({ type: 'REMOVE_SKILL_INTEREST_SUCCESS' });
            } else {
                dispatch({ type: 'REMOVE_SKILL_INTEREST_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'REMOVE_SKILL_INTEREST_ERROR' });
            console.log('error', error);
        }
    };
}
export const addCategoryCity = (data, user, onDone) => {
    return async dispatch => {
        try {
            dispatch({ type: 'ADD_CATEGORY_PROGRESS' });
            const response = await apiServices.addCategory(data)
            if (response?.data?.responseCode == 200) {
                if (data.type === 'category') {
                    user.userCategories = response?.data?.data
                } else if (data.type === 'area') {
                    user.userAreas = response?.data?.data
                } else if (data.type === 'city') {
                    user.userCities = response?.data?.data
                }
                dispatch({ type: 'GET_USER_SUCCESS', payload: user });
                dispatch({ type: 'ADD_CATEGORY_SUCCESS' });
                onDone()

            } else {
                dispatch({ type: 'ADD_CATEGORY_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'ADD_CATEGORY_ERROR' });
            console.log('error', error);
        }
    };
}
export const removeCategoryCity = (data, user, array, index) => {

    return async dispatch => {
        try {
            dispatch({ type: 'REMOVE_CATEGORY_PROGRESS' });
            const response = await apiServices.removeCategory(data)

            if (response?.data?.responseCode == 200) {
                let arr = array.filter((item, ind) => {
                    return ind !== index
                })
                if (data.type === 'category') {
                    user.userCategories = arr
                    dispatch(getCategories());
                } else if (data.type === 'area') {
                    user.userAreas = arr
                    dispatch(getAreas());
                } else if (data.type === 'city') {
                    user.userCities = arr
                    dispatch(getCities());
                }
                dispatch({ type: 'GET_USER_SUCCESS', payload: user });
                dispatch({ type: 'REMOVE_CATEGORY_SUCCESS' });
            } else {
                dispatch({ type: 'REMOVE_CATEGORY_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'REMOVE_CATEGORY_ERROR' });
            console.log('error', error);
        }
    };
}
export const saveExperience = (data, user_other_info) => {
    return async dispatch => {
        try {
            dispatch({ type: 'SAVE_EXPERIENCE_PROGRESS' });
            const response = await apiServices.saveExperience(data)
            if (response?.data?.responseCode == 200) {
                user_other_info.experiences = response?.data?.data

                dispatch({ type: 'GET_OTHER_INFO_SUCCESS', payload: user_other_info });
                dispatch({ type: 'SAVE_EXPERIENCE_SUCCESS' });
            } else {
                dispatch({ type: 'SAVE_EXPERIENCE_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'SAVE_EXPERIENCE_ERROR' });
            console.log('error', error);
        }
    };
}
export const updateExperience = (data, user_other_info, onDone) => {
    return async dispatch => {
        try {
            dispatch({ type: 'UPDATE_EXPERIENCE_PROGRESS' });
            const response = await apiServices.updateExperience(data)
            console.log("datadasdas", response?.data)
            if (response?.data?.responseCode == 200) {
                user_other_info.experiences = response?.data?.data
                dispatch({ type: 'GET_OTHER_INFO_SUCCESS', payload: user_other_info });
                dispatch({ type: 'UPDATE_EXPERIENCE_SUCCESS' });
                onDone()
            } else {
                dispatch({ type: 'UPDATE_EXPERIENCE_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'UPDATE_EXPERIENCE_ERROR' });
            console.log('error', error);
        }
    };
}
export const removeExperience = (id, user_other_info) => {
    return async dispatch => {
        try {
            dispatch({ type: 'REMOVE_EXPERIENCE_PROGRESS' });
            const response = await apiServices.removeExperience(`/${id}`)
            if (response?.data?.responseCode == 200) {
                user_other_info.experiences = response?.data?.data
                dispatch({ type: 'GET_OTHER_INFO_SUCCESS', payload: user_other_info });
                dispatch({ type: 'REMOVE_EXPERIENCE_SUCCESS' });
            } else {
                dispatch({ type: 'REMOVE_EXPERIENCE_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'REMOVE_EXPERIENCE_ERROR' });
            console.log('error', error);
        }
    };
}
export const getUserJobs = (data) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_USER_JOBS_PROGRESS' });
            const response = await apiServices.getUserJobs(data)
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'GET_USER_JOBS_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'GET_USER_JOBS_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'GET_USER_JOBS_ERROR' });
            console.log('error', error);
        }
    };
}
export const saveJob = (data) => {
    return async dispatch => {
        try {
            dispatch({ type: 'SAVE_JOB_PROGRESS' });
            const response = await apiServices.saveJob(data)
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'SAVE_JOB_SUCCESS' });
                dispatch({ type: 'GET_USER_JOBS_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'SAVE_JOB_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'SAVE_JOB_ERROR' });
            console.log('error', error);
        }
    };
}
export const getSocialLinks = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_SOCIAL_LINKS_PROGRESS' });
            const response = await apiServices.getSocialLinks(`/${id}`)
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'GET_SOCIAL_LINKS_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'GET_SOCIAL_LINKS_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'GET_SOCIAL_LINKS_ERROR' });
            console.log('error', error);
        }
    };
}
export const saveSocailLinks = (data) => {
    return async dispatch => {
        try {
            dispatch({ type: 'SAVE_SOCIAL_LINKS_PROGRESS' });
            const response = await apiServices.saveSocailLinks(data)
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'SAVE_SOCIAL_LINKS_SUCCESS' });
                dispatch({ type: 'GET_SOCIAL_LINKS_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'SAVE_SOCIAL_LINKS_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'SAVE_SOCIAL_LINKS_ERROR' });
            console.log('error', error);
        }
    };
}
export const getConnections = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_CONNECTIONS_PROGRESS' });
            const response = await apiServices.getConnections(`/${id}`)
            if (response?.data?.responseCode == 200) {
                dispatch({ type: 'GET_CONNECTIONS_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch({ type: 'GET_CONNECTIONS_ERROR' });
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.responseText,
                    type: "Error"
                }))
            }
        } catch (error) {
            dispatch({ type: 'GET_CONNECTIONS_ERROR' });
            console.log('error', error);
        }
    };
}
