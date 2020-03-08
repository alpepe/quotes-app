const ENABLE_MOBILE_VIEW = 'ENABLE_MOBILE_VIEW';
const DISABLE_MOBILE_VIEW = 'DISABLE_MOBILE_VIEW';

const DEFAULT_STATE = {
    isMobile: window.innerWidth <= 600 ? true : false,
};

export default function(state=DEFAULT_STATE, action) {

    if (action.type === ENABLE_MOBILE_VIEW) {
        return {...state, isMobile: true};
    }

    if (action.type === DISABLE_MOBILE_VIEW) {
        return {...state, isMobile: false};
    }


    return state;
}

export const enableMobileView = () => ({
    type: ENABLE_MOBILE_VIEW
});

export const disableMobileView = () => ({
    type: DISABLE_MOBILE_VIEW
});