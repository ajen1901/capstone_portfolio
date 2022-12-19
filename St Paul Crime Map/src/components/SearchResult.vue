<script>


export default {
    data() {
        return {
            name: ""
        }
    },
    props: {
        result_array: Array,
        neighborhoods: Array,
        neighborhood_names: Array
    },
    watch: {
        result_array() {
            console.log(this.result_array);
        },
        neighborhoods() {
            console.log(this.neighborhoods);
        },
        neighborhood_names() {
            console.log(this.neighborhood_names);
        }
    },
    methods: {
        contain(number) {
            let i;
            this.name = this.neighborhood_names[number-1];
            for(i=0; i<this.neighborhoods.length; i++){
                if(number == this.neighborhoods[i]){
                    return true;
                }
            }
            return false;
        }, getColor(code) {
            //console.log("code = " + code);
            code = parseInt(code);
            //console.log("code = " + code);
            if(code >= 100 && code < 200) {
                return "Violent";
            }
            else if((code >= 200 && code < 300) || (code >= 400 && code < 500) || (code >= 800 && code < 900)) {
                return "Violent";
            }
            else if((code >= 300 && code < 400) || (code >= 500 && code < 800)) {
                return "Property";
            }
            else if(code >= 900 && code < 1500) {
                return "Property";
            }
            else if(code >= 1800 && code < 1900) {
                return "Other";
            }
            else if(code == 2619) {
                return "Violent";
            }
            else {
                return "Other";
            }

        },
        onClickDelete(event){
            console.log(event);
            this.$emit('childdelete', event);
        }
    }
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Case Number</th>
                <th>Date and Time</th>
                <th>Incident</th>
                <th>Police Grid</th>
                <th>Neighborhood Name</th>
                <th>Block</th>
                <th>Look-Up</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody v-for="(item, index) in result_array">
                <tr v-if="this.contain(item.neighborhood_number)" :class="this.getColor(item.code)">
                    <td>{{ item.case_number }}</td>
                    <td>{{ item.date }}  {{ item.time }} </td>
                    <td>{{ item.incident }} (code: {{ item.code }})</td>
                    <td>{{ item.police_grid }}</td>
                    <td>{{ this.name }}</td>
                    <td>{{ item.block }}</td>
                    <td><button class="green" type="button" @click="addressSearch">Search</button>
                        <App :address_search2="item.block" /></td>

                    <td><button class="red" type="button" @click="onClickDelete(item.case_number)">Delete</button></td>
                </tr>
            
        </tbody>
    </table>
</template>

<style>
.even {
    width: 40rem;
    margin: 0;
    background-color: rgb(162, 206, 235);
}

.odd {
    width: 40rem;
    margin: 0;
    background-color: rgb(241, 241, 241);
}
th, td {
    border: solid 1px black;
}
.no_img {
    height: 80px;
}

.else {
    width: 40rem;
    margin: 0;
    background-color: rgb(241, 241, 241);
}
.Homicide {
    width: 40rem;
    margin: 0;
    background-color: rgb(156, 106, 106);
}
.Assault {
    width: 40rem;
    margin: 0;
    background-color: rgb(105, 111, 161);
}
.Theft {
    width: 40rem;
    margin: 0;
    background-color: rgb(113, 172, 106);
}
.PropertyDamage {
    width: 40rem;
    margin: 0;
    background-color: rgb(231, 219, 112);
}
.Narcotics {
    width: 40rem;
    margin: 0;
    background-color: rgb(146, 110, 167);
}
.Weapons {
    width: 40rem;
    margin: 0;
    background-color: rgb(189, 150, 78);
}
.Violent {
    width: 40rem;
    margin: 0;
    background-color: rgb(156, 106, 106);
}
.Other {
    width: 40rem;
    margin: 0;
    background-color: rgb(105, 111, 161);
}
.Property {
    width: 40rem;
    margin: 0;
    background-color: rgb(113, 172, 106);
}
</style>
