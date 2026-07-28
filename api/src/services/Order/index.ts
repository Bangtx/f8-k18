import {BaseService} from "../Base";
import {OrderEntity} from "../../entities/OrderEntity";

export class OrderService extends BaseService {}

const orderService = new OrderService(OrderEntity)