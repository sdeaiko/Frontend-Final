import boom from "boom"


const genericCrud = (model) => ({
    async get({ params: { id } }, res){
        try {
            const item = await model.findById(id);
            return res.status(200).send({item});
        } catch (e) {
            return res.status(400).send(boom.boomify(e));
        }
    },
    async getAll(_, res){
        try {
            console.log('Starting get all');
            const items = await model.find();
            return res.status(200).send({items});
        } catch (e) {
            return res.status(400).send(boom.boomify(e));
        }
    },
    async create({ body }, res){
        try {
            console.log('Starting create');
            const item = new model(body);
            const newItem = await item.save();
            console.log(newItem);
            return res.status(200).send({newItem});
        } catch (e) {
            return res.status(400).send(boom.boomify(e));
        }
    },
    async update(req, res) {
        const { params: { id }, body } = req;
        try {
          const item = await model.findByIdAndUpdate(id, body, { new: true });
          if (!item) {
            return res.status(404).send({ message: 'Category not found' });
          }
          return res.status(200).send({ item });
        } catch (e) {
          return res.status(400).send(boom.boomify(e));
        }
      },
    async delete({ params: { id } }, res){
        try {
            await model.findByIdAndDelete(id);
            return res.status(200).send({ status: 'OK', message: 'Was deleted successfully'});
        } catch (e) {
            return res.status(400).send(boom.boomify(e));
        }
    }
})


export default genericCrud