import  mongoose from  'mongoose'

var Schema = mongoose.Schema;

var personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

export const StoryModel  =    mongoose.models.Story ||mongoose.model('Story',storySchema) 
export const PersonModel  =    mongoose.models.Person ||mongoose.model('Person',personSchema) 


const author =   new PersonModel({
    _id:  new  mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
});
author.save(function(err){
    if(err) return 'Bad  one'

    const story1 = new  StoryModel({
        title: 'Casino Royale',
        author: author._id 
    });
    story1.save(function (err) {
        if (err) return 'Not GOOD';
        // thats it!
      });
    })

    console.log(author)
    

  