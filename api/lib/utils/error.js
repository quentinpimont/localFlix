class ApiError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

class DuplicateError extends ApiError {
    constructor(message='This ressources already exist') {
        super(message);
    }
}

class NotFoundError extends ApiError {
    constructor(message = 'Ressources not found', code = 404){
        super(message, code);
    }
}

class CategoryNotFound extends NotFoundError {
    constructor(message = 'Category not found.'){
        super(message);
    }
}

class UserNotFound extends NotFoundError {
    constructor(message = 'User not found.'){
        super(message);
    }
}

class ActorNotFound extends NotFoundError {
    constructor(message = 'Actor not found.') {
        super(message);
    }
}

class FilmNotFound extends NotFoundError {
    constructor(message = 'Film not found.') {
        super(message);
    }
}

class VideoNotFound extends NotFoundError {
    constructor(message = 'Video not found.') {
        super(message);
    }
}

class LoginError extends ApiError {
    constructor(message = 'Login and password not match'){
        super(message)
    }
}

module.exports = {
    NotFoundError,
    CategoryNotFound,
    UserNotFound,
    ActorNotFound,
    FilmNotFound,
    VideoNotFound,
    DuplicateError,
    LoginError,
}