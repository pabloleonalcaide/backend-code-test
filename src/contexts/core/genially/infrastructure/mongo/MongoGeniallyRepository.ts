import GeniallyRepository from "../../domain/GeniallyRepository";
import DatabaseError from "../../../../Shared/Domain/DatabaseError";
import {GeniallyMongoModel} from "./GeniallyModel";
import Genially from "../../domain/Genially";

export default class MongoGeniallyRepository implements GeniallyRepository  {

  async save(genially: Genially): Promise<void> {
    try{
        const model = new GeniallyMongoModel(genially.toPrimitives());
        return await GeniallyMongoModel.updateOne({_id: model.id},model, {upsert: true});
      }catch(error){
        throw new DatabaseError("Something were wrong with Mongo DB - save -");
      }
}
  async find(id: string): Promise<Genially> {
    try{
      const response = await GeniallyMongoModel.findOne({_id: id});
      return this.fromPrimitives(response);
    }catch(error){
      throw new DatabaseError("Something were wrong with MongoDB - find -");
    }
  }

  async delete(id: string): Promise<void> {
    try{
      return await GeniallyMongoModel.deleteOne({_id: id});
    }catch(error){
      throw new DatabaseError("Something were wrong with MongoDB - delete - ");
    }
  }

  private fromPrimitives(queryResult: Document<GeniallyMongoModel>): Genially{
      return Genially.fromPrimitives(
        queryResult._id,
        queryResult.name,
        queryResult.description ? queryResult.description : "",
        queryResult.createdAt ? queryResult.createdAt : null,
        queryResult.modifiedAt ? queryResult.modifiedAt : null,
        queryResult.deletedAt ? aggregate.deletedAt : null
      );
  }
}