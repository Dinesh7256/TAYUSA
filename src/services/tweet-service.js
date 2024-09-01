// const { TweetRepository } = require('../repository/index')
// import TweetRepository from '../repository/index.js'
// const { HashtagRepository } = require('../repository/index');
// import HashtagRepository from '../repository/index.js';

import { TweetRepository, HashtagRepository } from '../repository/index.js'

class TweetService {
    constructor() {
        // this.tweetRepository = new TweetRepository();
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

async create(data){
    const content = data.content;
    // const tags = content.match(/#[a-za-9_]+/g); 
    const tags = content.match(/#[a-z0-9_]+/g) //this regex extracts hashtags
                        .map((tag) => tag.substring(1).toLowerCase());
    // console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    // const alreadyPresentTags = this.hashtagRepository.findByName(tags);
    // let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);

    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);

        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }
    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

// module.exports = TweetService; 
export default TweetService;