## EARP Lab Website Manual 


#### home page/tab

The `_layouts/home.html` layout defines the landing page (the home tab doesn't actually do anything). This page includes 
- a lab introduction: the intro texts can be edited in `index.md`; the group picture is stored in the `assets` folder directory
- a list of featured publications: only featured publications from `_data/publications,yml` are visible on the home page; pdf files of publications are stored in the `publications` folder directory
- a list of update posts: posts are stored in the `_posts` folder directory, each of which is an md. file and uses the `_layouts/post.html` layout

#### people tab

- Individual lab member's info can be added/edited in `_data/settings.yml`, which fall into different groups (PIs, postdocs, students, etc). It displays each member's name, personal website (linked to the name), institution, email (clickable), bio, and headshot
- The tab's layout can be edited in `_layouts/people.html` which extracts info from `_data/settings.yml`
- All headshot images are stored in the `assets/headshots` folder directory

#### publication tab

- Publications can be added/edited in `_data/publications.yml`, which includes two sections: featured & full 
- Publication format can be edited in `_layouts/publications.html`, which is also included in `_layouts/home.html`. The layout not only defines reference formatting, but presents a short of featured publications on home page and a full list of publications in the publication tab through an if-else for loop
- All pdf files of publications are stored in the `publications` folder directory

#### header

Header displays website title (EARP Lab), description (Experimental Bioethics, AI, and Relational Moral Psychology Lab), and menu (people and publications)
- Header formatting can be edited in `_includes/header.html`

#### footer

Footer displays social media links and icons 
- Footer formatting can be edited in `_includes/footer.html`

#### head

general formatting? what is this lol
- Head formatting can be edited in `_includes/head.html`
