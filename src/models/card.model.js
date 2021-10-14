import Joi from 'joi';
import { getDB } from '../config/mongodb'

const cardCollectionName = 'cards'

const cardCollectinoSchema = Joi.object({
   boardId: Joi.string().required(),
   columnId: Joi.string().required(),
   title: Joi.string().required().min(3).max(50).trim(),
   cover: Joi.string().default(null),
   createdAt: Joi.date().timestamp().default(Date.now()),
   updatedAt: Joi.date().timestamp().default(null),
   _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) => {
   return await cardCollectinoSchema.validateAsync(data, { abortEarly: false})
}

const createNew = async (data) => {
   try {
      const value = await validateSchema(data)
      const result = await getDB().collection(cardCollectionName).insertOne(value)
      return result;
   } catch (error) {
      throw new Error(error)
   }  
}

export const CardModel = {
   createNew
}