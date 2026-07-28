import {BaseService} from "../Base";
import {OrderDetailEntity} from "../../entities/OrderDetailEntity";

export class OrderDetailService extends BaseService {}

const orderDetailService = new OrderDetailService(OrderDetailEntity)