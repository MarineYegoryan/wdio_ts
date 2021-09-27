export const home = {
    url: "",
    "top navigation": {
        isCollection: true,
        selector: ".top-navigation__row ",
        child: {
            "continuum": {
                selector: ".top-navigation__item.continuum",
                child: {
                    "link": {
                        isCollection: true,
                        selector: ".top-navigation__item-link"
                    }
                }
            }
        }
    }
};
