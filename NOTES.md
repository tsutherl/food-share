# StickYoSelf
<<<<<<< HEAD


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






STORY   LIST:  



database:


Write database models:  
			
		write models: 

			Users:  properties:
					primary key (userId),
					login name, password, unique email, isAdmin(boolean),

			Stickers: primary key (wishStickerId), name, price, associated wish, category, picture 

			Reviews:  primary key, text (validation: 5 chars min), stars? out of 5, association(s) to stickers 			and users

			Orders:  primary key, item(s) (include price, quantity), total order cost, date created, userID or 			guest Session ID, email (recipient), email (purchaser) complete (boolean)




		WRITE model associations (and methods)

					Order: belongsTo User  (or guest session ID)
							hasMany items

					Users:  hasMany orders, hasMany Reviews, hasMany items as favorites
								method? (based on COMPLETED orders, find history -- type and # of stickers ordered)


					* maybe later? *  social media connections -- purchased OR desired stickers 



Write back-end routes:  




		Admin functionality:  admins must be logged in as admin in order to access a /admin view which will allow order/item/database 
			manipulation 

		 .post (items), .delete (anything) --> admin only routes


		regular user routes: 

		.get (stickers), .get by id, findall by category, .get (one user), .post (their own user acc't), .put (their own user account)

		.post (to orders)





front-end components:

	

	navbar:  contact (email form), login, home, browse stickers, * admin-only menu, cart/bag

		STORY:  pick bootstrap layout, make navbar, include buttons but just as placeholders


	store display:  by category, all items,  options: sort by price, options: most purchased, options: sort by review rating

		inventory of stickers & wishes

		  indicates prices

		  order form

		display wishlist:  sticker onclick noise, can post stickers they like to social media and a friend could order for them

	user account view: 

		new user sign-up (option to create account if not yet registered) option to use oauth

		view past orders, view favorites, view & submit reviews

		view & edit own user info


	cart view:

		see items, change quantity or delete, link to item page

		submit order form, option to send as gift  --> ON SUBMIT:  confirmation, (send email w sticker?) (option to post to social media) 


STORIES:


 1.  write User model & model tests, write user routes & route tests, write front end route to display one user
 				(simply json object, no fancy html stuff)

 2.  write Sticker model & model tests, write sticker routes & route tests, write front end route to display 	
 				one sticker, all stickers (simply json object, no fancy html stuff)

 3.*  choose a homepage layout (bootstrap?), write basic front end routes for different views:
 					views:  home/welcome, 
 							all stickers, one sticker
 							add or login,
 							display one user / user info,
 							cart

 4. work on stickers views:  one sticker, all stickers, filter view by category (drop down menu?),
 								filter by price?  

 5. work on home/landing page (? images for categories with onclick functionality?), build navbar:
 								contact (email form), login, home, browse stickers, * admin-only menu, cart/bag

 6. work on user account view:  order history, info (name, email, etc -- UPDATE-able), favorites, 
 								maybe: social media account contact (later)

7.** (maybe after auth lecture)  work on forms:  sign up, login, checkout (from cart)

8.  







=======
# StickYoSelf
>>>>>>> c0627e25d8805cfe0542e3cc5d25c115888b8db9
