import mongoose from 'mongoose';

const IncomeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String },
});

export default mongoose.model('Income', IncomeSchema);
