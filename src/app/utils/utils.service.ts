import { Injectable } from "@nestjs/common";

@Injectable()
export class UtilsService {
  async configData(data: any) {
    const date = new Date(data);
    // Converter para objeto Date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${
      day.toString().length === 1 ? `0${day}` : day
    }${month.toString().length === 1 ? `0${month}` : month}${year}${hour.toString().length === 1 ? `0${hour}` : hour}${minutes.toString().length === 1 ? `0${minutes}` : minutes}${seconds.toString().length === 1 ? `0${seconds}` : seconds}`;
  }

  async getData() {
    return new Date();
  }

  async lpad(str: string, length: number, char: string) {
    return str.toString().padStart(length, char);
  }

  async helperIdToString(obj: any) {
    obj.id = obj.id.toString();

    if (obj.tb_companyId !== undefined) {
      obj.tb_companyId = obj.tb_companyId.toString();
    }

    if (obj.tb_userId !== undefined) {
      obj.tb_userId = obj.tb_userId.toString();
    }

    if (obj.tb_warehouseId !== undefined) {
      obj.tb_warehouseId = obj.tb_warehouseId.toString();
    }

    if (obj.productId !== undefined) {
      obj.productId = obj.productId.toString();
    }

    if (obj.id_order_det !== undefined) {
      obj.id_order_det = obj.id_order_det.toString();
    }

    if (obj.produto_id !== undefined) {
      obj.produto_id = obj.produto_id.toString();
    }

    if (obj.production_detId !== undefined) {
      obj.production_detId = obj.production_detId.toString();
    }

    if (obj.tb_shiftId !== undefined) {
      obj.tb_shiftId = obj.tb_shiftId.toString();
    }

    if (obj.tb_machineId !== undefined) {
      obj.tb_machineId = obj.tb_machineId.toString();
    }

    return obj;
  }
}
