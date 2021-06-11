import {Query,Where } from "./deps.ts";

export function selectSql():string{
    const builder = new Query();
    return builder.table("todo").select("*").build()
}

export function selectByIdSql(id:number){
    const builder = new Query();
    return builder.table("todo").select("*").where(Where.field("id").eq(id)).build()
}

export function insertSql(text:string){
    const builder = new Query();
    const records = [{text}] 
    return builder.table("todo").insert(records).build();
}


export function deleteByIdSql(id:number){
    const builder = new Query();
    return builder.table("todo").delete().where(Where.field("id").eq(id)).build()
    //select("*")
}