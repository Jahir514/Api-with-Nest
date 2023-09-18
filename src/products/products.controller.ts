/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Req, Res, Query, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express'
import { ProductsService } from './products.service';
import { ProductCreateDTO } from './dto/product_create.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }
    //post route
    @Post()
    async create(@Body() product: ProductCreateDTO): Promise<Product[]> {
        return this.productService.create(product)
    }

    //get route
    //find all
    @Get()
    findAll(@Req() req: Request, @Res() res: Response, @Query() page): any {
        console.log(page)
        return res.json({
            msg: "working"
        })
    }
    //get singel
    @Get('single/:id')
    findProduct(@Req() req: Request, @Res() res: Response, @Param() id: string): any {
        res.json({
            msg: 'Find single product route',
            id
        })
    }
    //update route
    @Put()
    update(): any {
        console.log('update route')
    }
    @Delete()
    delete(): any {
        console.log('delete route')
    }
}
