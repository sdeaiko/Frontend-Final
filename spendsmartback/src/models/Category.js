import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['Income', 'Expense'] },
});

export default mongoose.model('Category', CategorySchema);
