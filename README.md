# StickYoSelf


 grace shopper project:


 selling: stickers; for every sticker bought, a (corresponding?) wish will be fulfilled  1 : 1 sticker : wish 

home page / landing page:  

navbar that stays there throughout browsing 

		 store that can be browsed : 

		 		inventory of stickers & wishes

		 		indicates prices

		 		order form


		potential to login (can also purchase as visitor)

				authenticated users see past purchases & wishes granted, also can review products

				(?  allow users to request wish?,  post wishes granted to social media )

				*admin accounts can add stickers & wishes (admin can make decisions about suggested wishes)

		way to fulfill orders (send sticker, grant wish)

		way to keep track of stickers sold and wishes granted (admin access only)






database reqs:


Users:  properties:

				login name, password, admin(boolean), email, assoc. to Orders table, social media connections, favorites (has many stickers)


Stickers: properties: name, price, coordinated wish, category


Reviews:  association(s) to stickers and users

Orders:  shopping bag, assoc. with ONE user, many stickers;
			if guest order:  need a unique email







Admin functionality:  admins must be logged in as admin in order to access a /admin view which will allow order/item/database 
	manipulation 

 .post (items), .delete (anything) --> admin only routes


regular user routes: 

.get (stickers), .get by id, findall by category, .get (one user), .post (their own user acc't), .put (their own user account)

.post (to orders)




front-end components:

	navbar:  contact (email form), login, home, browse stickers, * admin-only menu, cart/bag

	store display:  by category, all items,  options: sort by price, options: most purchased, options: sort by review rating

		display wishlist:  sticker onclick noise, can post stickers they like to social media and a friend could order for them

	user account view: 

		new user sign-up (option to create account if not yet registered) option to use oauth

		view past orders, view favorites, view & submit reviews

		view & edit own user info


	cart view:

		see items, change quantity or delete, link to item page

		submit order form, option to send as gift  --> ON SUBMIT:  confirmation, (send email w sticker?) (option to post to social media) 



