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
            const form1=action.payload.details[0];
            const form2=action.payload.details[1];
            const form3=action.payload.details[2];
            const form4=action.payload.details[3];
            const form5=action.payload.details[4];
            const form6=action.payload.details[5];
           
                temp[action.payload.id][0].name = form1.name;
                temp[action.payload.id][0].altname = form1.altname;
                temp[action.payload.id][0].status = form1.status;
                temp[action.payload.id][0].codetype = form1.codetype;
                temp[action.payload.id][0].code = form1.code;
                temp[action.payload.id][0].pname = form1.pname;
                temp[action.payload.id][0].country = form1.country;
            
                temp[action.payload.id][1].name = form2.name;
                temp[action.payload.id][1].altname = form2.altname;
                temp[action.payload.id][1].status = form2.status;
                temp[action.payload.id][1].codetype = form2.codetype;
                temp[action.payload.id][1].code = form2.code;
                temp[action.payload.id][1].pname = form2.pname;
                temp[action.payload.id][1].country = form2.country;
            
                temp[action.payload.id][2].name = form3.name;
                temp[action.payload.id][2].altname = form3.altname;
                temp[action.payload.id][2].status = form3.status;
                temp[action.payload.id][2].tzone = form3.tzone;
                temp[action.payload.id][2].dst = form3.dst;
                temp[action.payload.id][2].codetype = form3.codetype;
                temp[action.payload.id][2].pname = form3.pname;
            
                temp[action.payload.id][3].name = form4.name;
                temp[action.payload.id][3].altname = form4.altname;
                temp[action.payload.id][3].status = form4.status;
                temp[action.payload.id][3].codetype = form4.codetype;
            
                temp[action.payload.id][4].name = form5.name;
                temp[action.payload.id][4].status = form5.status;
                temp[action.payload.id][4].codetype = form5.codetype;
                temp[action.payload.id][4].code = form5.code;
                temp[action.payload.id][4].parent = form5.parent;
                temp[action.payload.id][4].country = form5.country;
                temp[action.payload.id][4].city = form5.city;
            
                temp[action.payload.id][5].name = form6.name;
                temp[action.payload.id][5].type = form6.type;
                temp[action.payload.id][5].code = form6.code;
                temp[action.payload.id][5].codetype = form6.codetype;
                temp[action.payload.id][5].locname = form6.locname;
                temp[action.payload.id][5].loctype = form6.loctype;
            
            return{
                ...state,
                data:[...temp],
            }
        }

        default: return state;
    }
}