const INITIAL_STATE = {
    user_activities: null,
    loading: false,

    upload_loading: false,

    user_other_info: null,

    about_loading: false,

    all_categories: null,
    all_cities: null,
    all_areas: null,

    people_views: "",
    post_views: "",
    search_appearance: "",

    people_also_viewed: null,

    add_skill_loading: false,
    remove_skill_loading: false,
    add_category_loading: false,

    save_experience_loading: false,
    remove_experience_loading: false,

    jobs: null,
    save_job_loading: false,

    social_links: null,
    save_links_loading: false,

    connections: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ACTIVITY_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_ACTIVITY_SUCCESS':
            return {
                ...state,
                loading: false,
                user_activities: action.payload
            };
        case 'GET_ACTIVITY_ERROR':
            return {
                ...state,
                loading: true,
            };
        case 'UPLOAD_DP_COVER_PROGRESS':
            return {
                ...state,
                upload_loading: true,
            };
        case 'UPLOAD_DP_COVER_SUCCESS':
            return {
                ...state,
                upload_loading: false,
            };
        case 'UPLOAD_DP_COVER_ERROR':
            return {
                ...state,
                upload_loading: true,
            };
        case 'GET_OTHER_INFO_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_OTHER_INFO_SUCCESS':
            return {
                ...state,
                loading: false,
                user_other_info: action.payload
            };
        case 'GET_OTHER_INFO_ERROR':
            return {
                ...state,
                loading: true,
            };
        case 'UPDATE_USER_ABOUT_PROGRESS':
            return {
                ...state,
                about_loading: true,
            };
        case 'UPDATE_USER_ABOUT_SUCCESS':
            return {
                ...state,
                about_loading: false,
            };
        case 'UPDATE_USER_ABOUT_ERROR':
            return {
                ...state,
                about_loading: true,
            };
        case 'GET_CATEGORIES_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_CATEGORIES_SUCCESS':
            return {
                ...state,
                loading: false,
                all_categories: action.payload
            };
        case 'GET_CATEGORIES_ERROR':
            return {
                ...state,
                loading: true,
            };
        case 'GET_CITIES_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_CITIES_SUCCESS':
            return {
                ...state,
                loading: false,
                all_cities: action.payload
            };
        case 'GET_CITIES_ERROR':
            return {
                ...state,
                loading: true,
            };
        case 'GET_AREAS_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_AREAS_SUCCESS':
            return {
                ...state,
                loading: false,
                all_areas: action.payload
            };
        case 'GET_AREAS_ERROR':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_PROFILE_VIEW_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_PROFILE_VIEW_SUCCESS':
            return {
                ...state,
                loading: false,
                people_views: action.payload
            };
        case 'GET_USER_PROFILE_VIEW_ERROR':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_POST_VIEW_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_POST_VIEW_SUCCESS':
            return {
                ...state,
                loading: false,
                post_views: action.payload
            };
        case 'GET_USER_POST_VIEW_ERROR':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_SEARCH_APPEARANCE_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_SEARCH_APPEARANCE_SUCCESS':
            return {
                ...state,
                loading: false,
                search_appearance: action.payload
            };
        case 'GET_USER_SEARCH_APPEARANCE_ERROR':
            return {
                ...state,
                loading: true,
            };
        case 'GET_PEOPLE_ALSO_VIEWED_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_PEOPLE_ALSO_VIEWED_SUCCESS':
            return {
                ...state,
                loading: false,
                people_also_viewed: action.payload
            };
        case 'GET_PEOPLE_ALSO_VIEWED_ERROR':
            return {
                ...state,
                loading: false,
            };
        case 'ADD_SKILL_INTEREST_PROGRESS':
            return {
                ...state,
                add_skill_loading: true,
            };
        case 'ADD_SKILL_INTEREST_SUCCESS':
            return {
                ...state,
                add_skill_loading: false,
            };
        case 'ADD_SKILL_INTEREST_ERROR':
            return {
                ...state,
                add_skill_loading: false,
            };
        case 'REMOVE_SKILL_INTEREST_PROGRESS':
            return {
                ...state,
                remove_skill_loading: true,
            };
        case 'REMOVE_SKILL_INTEREST_SUCCESS':
            return {
                ...state,
                remove_skill_loading: false,
            };
        case 'REMOVE_SKILL_INTEREST_ERROR':
            return {
                ...state,
                remove_skill_loading: false,
            };
        case 'ADD_CATEGORY_PROGRESS':
            return {
                ...state,
                add_category_loading: true,
            };
        case 'ADD_CATEGORY_SUCCESS':
            return {
                ...state,
                add_category_loading: false,
            };
        case 'ADD_CATEGORY_ERROR':
            return {
                ...state,
                add_category_loading: false,
            };
        case 'REMOVE_CATEGORY_PROGRESS':
            return {
                ...state,
                remove_skill_loading: true,
            };
        case 'REMOVE_CATEGORY_SUCCESS':
            return {
                ...state,
                remove_skill_loading: false,
            };
        case 'REMOVE_CATEGORY_ERROR':
            return {
                ...state,
                remove_skill_loading: false,
            };
        case 'SAVE_EXPERIENCE_PROGRESS':
            return {
                ...state,
                save_experience_loading: true,
            };
        case 'SAVE_EXPERIENCE_SUCCESS':
            return {
                ...state,
                save_experience_loading: false,
            };
        case 'SAVE_EXPERIENCE_ERROR':
            return {
                ...state,
                save_experience_loading: false,
            };
        case 'UPDATE_EXPERIENCE_PROGRESS':
            return {
                ...state,
                save_experience_loading: true,
            };
        case 'UPDATE_EXPERIENCE_SUCCESS':
            return {
                ...state,
                save_experience_loading: false,
            };
        case 'UPDATE_EXPERIENCE_ERROR':
            return {
                ...state,
                save_experience_loading: false,
            };
        case 'REMOVE_EXPERIENCE_PROGRESS':
            return {
                ...state,
                remove_experience_loading: true,
            };
        case 'REMOVE_EXPERIENCE_SUCCESS':
            return {
                ...state,
                remove_experience_loading: false,
            };
        case 'REMOVE_EXPERIENCE_ERROR':
            return {
                ...state,
                remove_experience_loading: false,
            };
        case 'GET_USER_JOBS_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_JOBS_SUCCESS':
            return {
                ...state,
                loading: false,
                jobs: action.payload
            };
        case 'GET_USER_JOBS_ERROR':
            return {
                ...state,
                loading: false,
            };
        case 'SAVE_JOB_PROGRESS':
            return {
                ...state,
                save_job_loading: true,
            };
        case 'SAVE_JOB_SUCCESS':
            return {
                ...state,
                save_job_loading: false,
            };
        case 'SAVE_JOB_ERROR':
            return {
                ...state,
                save_job_loading: false,
            };
        case 'GET_SOCIAL_LINKS_PROGRESS':
            return {
                ...state,
                save_link_loading: true,
            };
        case 'GET_SOCIAL_LINKS_SUCCESS':
            return {
                ...state,
                save_link_loading: false,
                social_links: action.payload
            };
        case 'GET_SOCIAL_LINKS_ERROR':
            return {
                ...state,
                save_link_loading: false,
            };
        case 'SAVE_SOCIAL_LINKS_PROGRESS':
            return {
                ...state,
                save_link_loading: true,
            };
        case 'SAVE_SOCIAL_LINKS_SUCCESS':
            return {
                ...state,
                save_link_loading: false,
            };
        case 'SAVE_SOCIAL_LINKS_ERROR':
            return {
                ...state,
                save_link_loading: false,
            };
        case 'GET_CONNECTIONS_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'GET_CONNECTIONS_SUCCESS':
            return {
                ...state,
                loading: false,
                connections: action.payload
            };
        case 'GET_CONNECTIONS_ERROR':
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};
