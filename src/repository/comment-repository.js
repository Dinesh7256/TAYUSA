import CrudRepository from "./crud-repository";
import comment from '../models/comment'

class CommentRepository extends CrudRepository{
    constructor(){
        super(comment);
    }
}

export default CommentRepository;