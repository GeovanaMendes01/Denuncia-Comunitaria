import mongoose, { Schema, Document } from "mongoose";

export interface IDenuncia extends Document {
  titulo: string;
  descricao: string;
  localizacao: string;
  categoria: string;
  data: Date;
}

const DenunciaSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  localizacao: { type: String, required: true },
  categoria: { type: String, required: true },
  data: { type: Date, default: Date.now },
});

export default mongoose.model<IDenuncia>("Denuncia", DenunciaSchema);