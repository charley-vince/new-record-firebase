
import React from 'react';
import PropTypes from 'prop-types'
import en from '../utils/i18n/msg_en';
import ru from '../utils/i18n/msg_ru';

const languages = {
    en,
    ru
};

export default function translate(key) {
    return Component => {
        class TranslationComponent extends React.Component {
            render() {
                let strings = languages[this.context.currentLanguage][key];
                return <Component {...this.props} {...this.state} strings={strings} />;
            }
        }

        TranslationComponent.contextTypes = {
            currentLanguage: PropTypes.string.isRequired
        };

        return TranslationComponent;
    };
}
