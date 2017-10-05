!/bin/bash
Popular
curl -H "Content-Type: application/json" -d '{"name":"Popular"}' http://localhost:8080/create_venue_list

curl -H "Content-Type: application/json" -d '{"name":"The Fainting Goat", "address": "846 Broadway", "city": "Denver", "zip": "80203", "state": "CO", "image": "https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/42959504e05245439bd59f449f106cd7.jpg", "country": "USA"}' http://localhost:8080/create_venue
curl -H "Content-Type: application/json" -d '{"name":"Panzano", "address": "909 17th St", "city": "Denver", "zip": "80202", "state": "CO", "image": "http://coloradobites.com/wp-content/uploads/2015/05/panzanococktail1.jpg", "country": "USA"}' http://localhost:8080/create_venue
curl -H "Content-Type: application/json" -d '{"name":"Linger", "address": "2030 W 30th Ave", "city": "Denver", "zip": "80211", "state": "CO", "image": "http://denver.thedrinknation.com/images/bars/lingerdenver.jpg", "country": "USA"}' http://localhost:8080/create_venue


curl -H "Content-Type: application/json" -d '{"venue_name":"The Fainting Goat", "venue_list_name": "Popular"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"Panzano", "venue_list_name": "Popular"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"Linger", "venue_list_name": "Popular"}' http://localhost:8080/venue_list_add

#Best Drink Specials
curl -H "Content-Type: application/json" -d '{"name":"Best Drink Specials"}' http://localhost:8080/create_venue_list

curl -H "Content-Type: application/json" -d '{"name":"Ophelia\u0027s Electric Soapbox", "address": "1215 20th St", "city": "Denver", "zip": "80202", "state": "CO", "image": "https://static.highsnobiety.com/wp-content/uploads/selectism/2015/07/Ophelia-Denver-Selectism-Bites-01-320x213.jpg", "country": "USA"}' http://localhost:8080/create_venue
curl -H "Content-Type: application/json" -d '{"name":"Fado Irish Pub & Restaurant", "address": "1735 19th St", "city": "Denver", "zip": "80202", "state": "CO", "image": "http://ww1.prweb.com/prfiles/2010/02/23/3643764/1_denver3.jpg", "country": "USA"}' http://localhost:8080/create_venue
curl -H "Content-Type: application/json" -d '{"name":"Beatrice & Woodsley", "address": "38 S Broadway", "city": "Denver", "zip": "80209", "state": "CO", "image": "https://lh3.googleusercontent.com/beycvnvegfiLb4k5fr0AZ1ARp1XNTi6nmD862_ka2yEJC6nzqaJ4ftxoTl7D9H0=w576-h384-n", "country": "USA"}' http://localhost:8080/create_venue

curl -H "Content-Type: application/json" -d '{"venue_name":"Ophelia\u0027s Electric Soapbox", "venue_list_name": "Best Drink Specials"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"Fado Irish Pub & Restaurant", "venue_list_name": "Best Drink Specials"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"Beatrice & Woodsley", "venue_list_name": "Best Drink Specials"}' http://localhost:8080/venue_list_add

#Best Food Specials
curl -H "Content-Type: application/json" -d '{"name":"Best Food Specials"}' http://localhost:8080/create_venue_list

curl -H "Content-Type: application/json" -d '{"name":"Masterpiece Deli", "address": "1575 Central St", "city": "Denver", "zip": "80211", "state": "CO", "image": "http://denver.thedrinknation.com/images/bars/masterpiecedelidenver.jpg", "country": "USA"}' http://localhost:8080/create_venue
curl -H "Content-Type: application/json" -d '{"name":"Work & Class", "address": "2500 Larimer St", "city": "Denver", "zip": "80205", "state": "CO", "image": "https://assets3.thrillist.com/v1/image/1682884/size/tl-horizontal_main_2x.jpg", "country": "USA"}' http://localhost:8080/create_venue
curl -H "Content-Type: application/json" -d '{"name":"La Cour", "address": "1643 S Broadway", "city": "Denver", "zip": "80210", "state": "CO", "image": "http://www.denversartbar.com/wp-content/uploads/2017/05/web-picture-homepage1.jpg", "country": "USA"}' http://localhost:8080/create_venue

curl -H "Content-Type: application/json" -d '{"venue_name":"Masterpiece Deli", "venue_list_name": "Best Food Specials"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"Work & Class", "venue_list_name": "Best Food Specials"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"La Cour", "venue_list_name": "Best Food Specials"}' http://localhost:8080/venue_list_add


#Roof Top
curl -H "Content-Type: application/json" -d '{"name":"Roof Top"}' http://localhost:8080/create_venue_list

curl -H "Content-Type: application/json" -d '{"name":"Los Chingones", "address": "2463 Larimer St", "city": "Denver", "zip": "80205", "state": "CO", "image": "https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/42959504e05245439bd59f449f106cd7.jpg", "country": "USA"}' http://localhost:8080/create_venue
curl -H "Content-Type: application/json" -d '{"name":"ViewHouse Eatery, Bar & Rooftop", "address": "2015 Market St", "city": "Denver", "zip": "80205", "state": "CO", "image": "https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/42959504e05245439bd59f449f106cd7.jpg", "country": "USA"}' http://localhost:8080/create_venue
curl -H "Content-Type: application/json" -d '{"name":"Tamayo", "address": "1400 Larimer St", "city": "Denver", "zip": "80202", "state": "CO", "image": "http://www.richardsandoval.com/tamayo/uploads/2014-06-11_11-23_441.jpg", "country": "USA"}' http://localhost:8080/create_venue


curl -H "Content-Type: application/json" -d '{"venue_name":"Los Chingones", "venue_list_name": "Roof Top"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"Tamayo", "venue_list_name": "Roof Top"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"ViewHouse Eatery, Bar & Rooftop", "venue_list_name": "Roof Top"}' http://localhost:8080/venue_list_add
curl -H "Content-Type: application/json" -d '{"venue_name":"Linger", "venue_list_name": "Roof Top"}' http://localhost:8080/venue_list_add

 
for i in {1..12}
do
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "drink", "price": 5.00, "description": "Local Draft Beer"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "drink", "price": 6.00, "description": "Cocktail"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "drink", "price": 3.00, "description": "You call it"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "drink", "price": 5.00, "description": "Buy one get one"}' http://localhost:8080/add_menu_item

    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "food", "price": 5.00, "description": "Half off apps"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "food", "price": 2.00, "description": "Tacos"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "food", "price": 4.00, "description": "You call it"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "food", "price": 5.00, "description": "Buy one get one"}' http://localhost:8080/
    
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "all", "price": 5.00, "description": "Half off apps and drinks"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "all", "price": 2.00, "description": "Tacos and tequila"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "all", "price": 4.00, "description": "You call it"}' http://localhost:8080/add_menu_item
    curl -H "Content-Type: application/json" -d '{"menu_id": '"$i"', "category": "all", "price": 5.00, "description": "Buy one get one"}' http://localhost:8080/add_menu_item
done

