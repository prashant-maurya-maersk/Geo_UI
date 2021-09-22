const data1 = [];


data1.push([
    {
        name:"",
        altname:"",
        status:"",
        codetype:"",
        code:"",
        pname:"",
        country:"",
    },
    {
        name:"",
        altname:"",
        status:"",
        codetype:"",
        code:"",
        pname:"",
        country:"",
    },
    {
        name:"",
        altname:"",
        status:"",
        tzone:"",
        dst:"",
        codetype:"",
        pname:"",
    },
    {
        name:"",
        altname:"",
        status:"",
        codetype:"",
    },
    {
        name:"",
        status:"",
        codetype:"",
        code:"",
        parent:"",
        country:"",
        city:"",
    },
    {
        name:"",
        type:"",
        code:"",
        codetype:"",
        locname:"",
        loctype:"",
    },
    [
        {
            id:1,
            name: "Bhubanswar",
            status: "Active",
            code: "BBSR",
            pname: "India",
            ptype: "Country",
            details:{
                city: [
                    {
                        name: "Bhubaneswar",
                        activeflag :"",
                        validfrom: "02-12-2000",
                        validto: "02-12-2099",
                        latlong:"",
                        timezone:"IST",
                        dst:"",
                        desc:"",
                    },
                    {
                        name: "Bhuvaneswar",
                        activeflag :"",
                        validfrom: "02-12-2000",
                        validto: "02-12-2099",
                        latlong:"",
                        timezone:"IST",
                        dst:"",
                        desc:"",
                    },
                ],
            altname:[],
            altcode:[
                    {
                        ctype: "RKST",
                        code: "I28"
                    },
                    {
                        ctype: "RKTS",
                        code: "528"
                    },
                ],
            parent:[
                {
                    pname:"India",
                    ptype:"Country"
                },
                ],
            bda:[
                {
                    name:"Patia",
                    type:"",
                },
                {
                    name:"Khorda",
                    type:"",
                },
            ],
            },
        },
        {
            id:2,
            name: "Bangalore",
            status: "Active",
            code: "BLR",
            pname: "India",
            ptype: "Country",
            details:{
                city: [
                    {
                        name: "Bangalore",
                        activeflag :"",
                        validfrom: "02-12-2000",
                        validto: "02-12-2099",
                        latlong:"",
                        timezone:"IST",
                        dst:"",
                        desc:"",
                    },
                    {
                        name: "Bengaluru",
                        activeflag :"",
                        validfrom: "02-12-2000",
                        validto: "02-12-2099",
                        latlong:"",
                        timezone:"IST",
                        dst:"",
                        desc:"",
                    },
                ],
            altname:[],
            altcode:[
                    {
                        ctype: "RKST",
                        code: "I28"
                    },
                    {
                        ctype: "RKTS",
                        code: "528"
                    },
                ],
            parent:[
                {
                    pname:"India",
                    ptype:"Country"
                },
                ],
            bda:[
                {
                    name:"Kengeri",
                    type:"",
                },
                {
                    name:"Jayanagar",
                    type:"",
                },
            ],
            },
        },
        {
            id:3,
            name: "Varanasi",
            status: "Active",
            code: "VNS",
            pname: "India",
            ptype: "Country",
            details:{
                city: [
                    {
                        name: "Varanasi",
                        activeflag :"",
                        validfrom: "02-12-2000",
                        validto: "02-12-2099",
                        latlong:"",
                        timezone:"IST",
                        dst:"",
                        desc:"",
                    },
                    {
                        name: "Banaras",
                        activeflag :"",
                        validfrom: "02-12-2000",
                        validto: "02-12-2099",
                        latlong:"",
                        timezone:"IST",
                        dst:"",
                        desc:"",
                    },
                ],
            altname:[],
            altcode:[
                    {
                        ctype: "RKST",
                        code: "I28"
                    },
                    {
                        ctype: "RKTS",
                        code: "528"
                    },
                ],
            parent:[
                {
                    pname:"India",
                    ptype:"Country"
                },
                ],
            bda:[
                {
                    name:"Chaukia",
                    type:"",
                },
                {
                    name:"Godaulia",
                    type:"",
                },
            ],
            },
        },
    ],
    {
        id:1,
        res:false,
    },
]);

const initialValue ={
    data: data1,
}


export const tabDataReducer= (state = initialValue, action) => { 
    switch(action.type){
        case "ADD_DATA_TAB":{ 
            const temp =[...state.data];
            temp.push([
                {
                    name:"",
                    altname:"",
                    status:"",
                    codetype:"",
                    code:"",
                    pname:"",
                    country:"",
                },
                {
                    name:"",
                    altname:"",
                    status:"",
                    codetype:"",
                    code:"",
                    pname:"",
                    country:"",
                },
                {
                    name:"",
                    altname:"",
                    status:"",
                    tzone:"",
                    dst:"",
                    codetype:"",
                    pname:"",
                },
                {
                    name:"",
                    altname:"",
                    status:"",
                    codetype:"",
                },
                {
                    name:"",
                    status:"",
                    codetype:"",
                    code:"",
                    parent:"",
                    country:"",
                    city:"",
                },
                {
                    name:"",
                    type:"",
                    code:"",
                    codetype:"",
                    locname:"",
                    loctype:"",
                },
                [
                    {
                        id:1,
                        name: "Bhubanswar",
                        status: "Active",
                        code: "BBSR",
                        pname: "India",
                        ptype: "Country",
                        details:{
                            city: [
                                {
                                    name: "Bhubaneswar",
                                    activeflag :"",
                                    validfrom: "02-12-2000",
                                    validto: "02-12-2099",
                                    latlong:"",
                                    timezone:"IST",
                                    dst:"",
                                    desc:"",
                                },
                                {
                                    name: "Bhuvaneswar",
                                    activeflag :"",
                                    validfrom: "02-12-2000",
                                    validto: "02-12-2099",
                                    latlong:"",
                                    timezone:"IST",
                                    dst:"",
                                    desc:"",
                                },
                            ],
                        altname:[],
                        altcode:[
                                {
                                    ctype: "RKST",
                                    code: "I28"
                                },
                                {
                                    ctype: "RKTS",
                                    code: "528"
                                },
                            ],
                        parent:[
                            {
                                pname:"India",
                                ptype:"Country"
                            },
                            ],
                        bda:[
                            {
                                name:"Patia",
                                type:"",
                            },
                            {
                                name:"Khorda",
                                type:"",
                            },
                        ],
                        },
                    },
                    {
                        id:2,
                        name: "Bangalore",
                        status: "Active",
                        code: "BLR",
                        pname: "India",
                        ptype: "Country",
                        details:{
                            city: [
                                {
                                    name: "Bangalore",
                                    activeflag :"",
                                    validfrom: "02-12-2000",
                                    validto: "02-12-2099",
                                    latlong:"",
                                    timezone:"IST",
                                    dst:"",
                                    desc:"",
                                },
                                {
                                    name: "Bengaluru",
                                    activeflag :"",
                                    validfrom: "02-12-2000",
                                    validto: "02-12-2099",
                                    latlong:"",
                                    timezone:"IST",
                                    dst:"",
                                    desc:"",
                                },
                            ],
                        altname:[],
                        altcode:[
                                {
                                    ctype: "RKST",
                                    code: "I28"
                                },
                                {
                                    ctype: "RKTS",
                                    code: "528"
                                },
                            ],
                        parent:[
                            {
                                pname:"India",
                                ptype:"Country"
                            },
                            ],
                        bda:[
                            {
                                name:"Kengeri",
                                type:"",
                            },
                            {
                                name:"Jayanagar",
                                type:"",
                            },
                        ],
                        },
                    },
                    {
                        id:3,
                        name: "Varanasi",
                        status: "Active",
                        code: "VNS",
                        pname: "India",
                        ptype: "Country",
                        details:{
                            city: [
                                {
                                    name: "Varanasi",
                                    activeflag :"",
                                    validfrom: "02-12-2000",
                                    validto: "02-12-2099",
                                    latlong:"",
                                    timezone:"IST",
                                    dst:"",
                                    desc:"",
                                },
                                {
                                    name: "Banaras",
                                    activeflag :"",
                                    validfrom: "02-12-2000",
                                    validto: "02-12-2099",
                                    latlong:"",
                                    timezone:"IST",
                                    dst:"",
                                    desc:"",
                                },
                            ],
                        altname:[],
                        altcode:[
                                {
                                    ctype: "RKST",
                                    code: "I28"
                                },
                                {
                                    ctype: "RKTS",
                                    code: "528"
                                },
                            ],
                        parent:[
                            {
                                pname:"India",
                                ptype:"Country"
                            },
                            ],
                        bda:[
                            {
                                name:"Chaukia",
                                type:"",
                            },
                            {
                                name:"Godaulia",
                                type:"",
                            },
                        ],
                        },
                    },
                ],
                {
                    id:1,
                    res:false,
                },
            ]);
            return{
                ...state,
                data: temp,
            }
        }

        case "ADD_DATA_RESULT":{
            const temp =[...state.data];
            temp[action.payload.id][6].push(...action.payload.data)
            return{
                ...state,
                data: temp,
            }
        }

        case "ADD_RESULT":{
            const temp=[...state.data];
            temp.push(action.payload);
            return{
                ...state,
                data:temp,
            }
        }

        case "DELETE_DATA":{
            const arr1 = [...state.data]
            arr1.splice(action.payload, 1);  
            return{
                ...state,
                data:[...arr1],
            }
        }

        case 'UPDATE_INSIDE_TAB':{
            const temp=[...state.data];
            temp[action.payload.id].id=action.payload.tabnumber;
            return{
                ...state,
                data:temp,
            }
        }

        case 'SET_RES':{
            const temp=[...state.data];
            const temp2=temp[action.payload];
            temp2[7].res=true;
            temp[action.payload]=temp2;
            return{
                ...state,
                data:temp,
            }
        }

        case 'SET_ID':{
            console.log(action.payload);
            const temp=[...state.data];
            temp[action.payload.id][7].id=action.payload.tabno;
            return{
                ...state,
                data:temp,
            }
        }

        case "UPDATE_DATA":{
            const temp =[...state.data];
            if(action.payload.row === 0 ){
                temp[action.payload.id][0].name = action.payload.data.name;
                temp[action.payload.id][0].altname = action.payload.data.altname;
                temp[action.payload.id][0].status = action.payload.data.status;
                temp[action.payload.id][0].codetype = action.payload.data.codetype;
                temp[action.payload.id][0].code = action.payload.data.code;
                temp[action.payload.id][0].pname = action.payload.data.pname;
                temp[action.payload.id][0].country = action.payload.data.country;
            }
            else if(action.payload.row === 1){
                temp[action.payload.id][1].name = action.payload.data.name;
                temp[action.payload.id][1].altname = action.payload.data.altname;
                temp[action.payload.id][1].status = action.payload.data.status;
                temp[action.payload.id][1].codetype = action.payload.data.codetype;
                temp[action.payload.id][1].code = action.payload.data.code;
                temp[action.payload.id][1].pname = action.payload.data.pname;
                temp[action.payload.id][1].country = action.payload.data.country;
            }
            else if(action.payload.row === 2){
                temp[action.payload.id][2].name = action.payload.data.name;
                temp[action.payload.id][2].altname = action.payload.data.altname;
                temp[action.payload.id][2].status = action.payload.data.status;
                temp[action.payload.id][2].tzone = action.payload.data.tzone;
                temp[action.payload.id][2].dst = action.payload.data.dst;
                temp[action.payload.id][2].codetype = action.payload.data.codetype;
                temp[action.payload.id][2].pname = action.payload.data.pname;
            }
            else if(action.payload.row === 3){
                temp[action.payload.id][3].name = action.payload.data.name;
                temp[action.payload.id][3].altname = action.payload.data.altname;
                temp[action.payload.id][3].status = action.payload.data.status;
                temp[action.payload.id][3].codetype = action.payload.data.codetype;
            }
            else if(action.payload.row === 4){
                temp[action.payload.id][4].name = action.payload.data.name;
                temp[action.payload.id][4].status = action.payload.data.status;
                temp[action.payload.id][4].codetype = action.payload.data.codetype;
                temp[action.payload.id][4].code = action.payload.data.code;
                temp[action.payload.id][4].parent = action.payload.data.parent;
                temp[action.payload.id][4].country = action.payload.data.country;
                temp[action.payload.id][4].city = action.payload.data.city;
            }
            else{
                temp[action.payload.id][5].name = action.payload.data.name;
                temp[action.payload.id][5].type = action.payload.data.type;
                temp[action.payload.id][5].code = action.payload.data.code;
                temp[action.payload.id][5].codetype = action.payload.data.codetype;
                temp[action.payload.id][5].locname = action.payload.data.locname;
                temp[action.payload.id][5].loctype = action.payload.data.loctype;
                
            }
            return{
                ...state,
                data:[...temp],
            }
        }

        default: return state;
    }
}