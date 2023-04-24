import { model, Schema } from 'mongoose';

const dadJokeSchema = new Schema(
  {
    setup: {
      type: String,
      required: [true, 'Please enter dad joke setup.'],
      minLength: [2, 'Setup must be at least two characters.'],
    },
    punchline: {
      type: String,
      required: [true, 'Please enter dad joke punchline.'],
      minLength: [2, 'Punchline must be at least two characters.'],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

const DadJoke = model('DadJoke', dadJokeSchema);
export default DadJoke;
