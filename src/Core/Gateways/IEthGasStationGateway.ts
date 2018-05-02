import TxPriceResponse from "../Models/TxPriceResponse";

export default interface  IEthGasStationGateway {
    getPrices() : Promise<TxPriceResponse>
}