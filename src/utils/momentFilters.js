import Moment from 'moment';
import 'moment/min/locales.min';

Moment.locale('ru');


export function formateDateTime(value) {
    if (!value) {
        return null;
    }

    return Moment(value).format('DD.MM.YYYY HH:mm');
}

export function formateDate(value) {
    if (!value) {
        return null;
    }

    return Moment(value).format('LL');
}
