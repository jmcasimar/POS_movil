import { database } from "../model/database";
import { withObservables } from '@nozbe/watermelondb/react';
import React, { useState, useEffect } from 'react';
import { Button, FlatList, View, Text, SafeAreaView } from "react-native";

const Products = () => {
    const [ myProducts, setMyProducts ] = useState([]);

    const getProducts = async () => {
        const products = await database.get('products').query().fetch();
        setMyProducts(products);
    };

    const createProduct = async ({code, name, unit, price, quantity}) => {
        const newPr = await database.write(async () => {
            const newProduct = await database.get('products').create(product => {
                product.code = code;
                product.name = name;
                product.unit = unit;
                product.price = price;
                product.quantity = quantity;
            });
            return newProduct;
        });
        setMyProducts([newPr, ...myProducts, ]);
    };

    // Use effects
    useEffect(() => {
        getProducts();
    }, []);

    const remove = (product) => {
        const newList = myProducts.filter((pr) => pr.id!==product.id);
        setMyProducts(newList);
        product.remove(product.id);
    };

    const Item = ({title, id, item}) => (
        <View>
            <Text style={{color: 'black'}}>{title}</Text>
            <Button title='Borrar' onPress={() => remove(item)}/>
        </View>
    );
    
    const observeItem = withObservables(['product'], ({ product }) => ({
        product // shortcut syntax for `product: product()`
    }));

    const ReactiveItem = observeItem(Item);

    return (
        <SafeAreaView>  
                <FlatList
                    data={myProducts}
                    renderItem={({item}) => <Item title={item.name} id={item.id} item={item}/>}
                    keyExtractor={item => item.id}
                    ListFooterComponent={
                        <Button
                            onPress={() => createProduct({code: '557896', name: 'Producto de prueba', unit: 'pza', price: 15, quantity: 20})}
                            title="Crea un producto"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    }
                />
        </SafeAreaView>
        
    );
}

export default Products;