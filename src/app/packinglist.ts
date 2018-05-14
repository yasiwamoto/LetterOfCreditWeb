import { Serializable } from './serializable';
import { Helper } from './helper';

export class PackingList implements Serializable<PackingList> {

  //for now, the issuer of the packing list is always the seller
  public plIssuer: string;

  public issueDate: string;
  public orderNumber: string;

  public transportMethod: string;
  public nameOfVessel: string;
  public billOfLadingNumber: string;

  public sellerName: string;
  public sellerAddress: string;
  public sellerPhone: string;

  public buyerName: string;
  public buyerAddress: string;
  public buyerPhone: string;

  public goodsDescription: string;
  public goodsPurchaseOrderRef: string;
  public goodsQuantity: number;
  public goodsUnitPrice: number;
  public goodsGrossWeight: number;

  public attachmentHash: string;

  public advisingBank: string;
  public issuingBank: string;

  deserialize(input: any) {
    this.plIssuer = input.seller;

    this.issueDate = new Helper().convertToDate(input.props.issueDate);
    this.orderNumber = input.props.orderNumber;

    this.transportMethod = input.props.transportMethod;
    this.nameOfVessel = input.props.nameOfVessel;
    this.billOfLadingNumber = input.props.billOfLadingNumber;

    this.sellerName = input.props.seller.name;
    this.sellerAddress = input.props.seller.address;
    this.sellerPhone = input.props.seller.phone;

    this.buyerName = input.props.buyer.name;
    this.buyerAddress = input.props.buyer.address;
    this.buyerPhone = input.props.buyer.phone;

    this.goodsDescription = input.props.descriptionOfGoods[0].description;
    this.goodsPurchaseOrderRef = input.props.descriptionOfGoods[0].purchaseOrderRef;
    this.goodsQuantity = input.props.descriptionOfGoods[0].quantity;
    this.goodsUnitPrice = input.props.descriptionOfGoods[0].unitPrice;
    this.goodsGrossWeight = input.props.descriptionOfGoods[0].grossWeight.quantity + input.props.descriptionOfGoods[0].grossWeight.unit;

    this.attachmentHash = input.props.attachmentHash

    return this;
  }
}
