import prismaClient from "../../prisma"
interface DetailRequest{
  order_id: string
}

class DetailOrderService { 
  async execute({order_id}: DetailRequest){

    //Buscar todos os itens de uma ordem(pedido)
    const orders = await prismaClient.item.findMany({
      where:{
        order_id: order_id
      },
      include:{
        product: true,
        order: true
      }
    })
    return orders;


  }
}
export { DetailOrderService }