const onSuccess = (data, message, code) => {

    return ({
        success : true,
        code,
        data,
        message,
    });

}

const onError = (error, message, code) => {

    let errors = [];

    if (error != null) {

        switch(error['name']) {
            case 'SequelizeValidationError':
                for(let i = 0; i < error['errors'].length; i++) {
                    let newError = error['errors'][i];
                    errors.push({
                        type: newError['type'],
                        field: newError['path'],
                        message: newError['message'],
                        value: newError['value']
                    });
                }
                break;
    
            case 'SequelizeUniqueConstraintError':
                for(let i = 0; i < error['errors'].length; i++) {
                    let newError = error['errors'][i];
                    errors.push({
                        type: newError['type'],
                        field: newError['path'],
                        message: newError['message'],
                        value: newError['value']
                    });
                }
                break;
        }

    }

    return ({
        success : false,
        code,
        error : {
            errors
        },
        message
    });

}

module.exports = {
    onSuccess,
    onError
}