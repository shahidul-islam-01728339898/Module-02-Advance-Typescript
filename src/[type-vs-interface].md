Interface is generally connected to objects that means object related work is done using Interface and type alias are connected with literals, unions, tuples and primitives that means as per our requirement we can make an object there we will use keyword which name is type.
when we need to work with object we have to use interface besides whenever we will do others general task we will ues type alies.

Difference:

    Type alias: to use the type alias we have to follow the following step:
        01. write : type (Keyword)
        02. write : type name (by user)
        03. write : equal sign (to keep data)
        04. write : opening and closing curly braches
        05. write : Now input data into the curly braches.
        Example:
        type Tproduct= {
            itemId: number;
            itemName: string;
            itemCategory: string;
            isActive: boolean;
        }

    Interface : to use the type alias we have to follow the following step:
        01. write : interface (Keyword)
        02. write : interface name (by user)
        03. write : opening and closing curly braches
        04. write : Now input data into the curly braches.
        Example:
        interface Iproject= {
            itemId: number;
            itemName: string;
            itemCategory: string;
            isActive: boolean;
        }
