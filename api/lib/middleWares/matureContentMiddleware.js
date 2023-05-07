const {UsersRepository} = require('../repositories/users-repository');

const usersRepo = new UsersRepository();


async function isMatureContent(req, res, next) {
    const isMatureEnable = (req.query.mature)? Number(req.query.mature): 0;
    const user = await usersRepo.get(req.userId);
    if(isMatureEnable && user.isMature){
        req.matureContent = true;
        next();
    } else {
        req.matureContent = false;
        next();
    }
}

module.exports = isMatureContent;