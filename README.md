## EARP Lab Website Maintenance 


#### home page

The `_layouts/home.html` layout defines the home/landing page. This page includes 
1) a lab introduction: the intro texts can be edited in `index.md`; the group picture is stored in the `assets` folder directory
2) a list of featured publications: only featured publications from `_data/publications,yml` are visible on the home page; pdf files of publications are stored in the `publications` folder directory
3) a list of update posts: posts are stored in the `_posts` folder directory, each of which is an md. file and uses the `_layouts/post.html` layout

#### people tab

- The `_layouts/people.html` layout defines the format of how lab members' info is presented through 3 for loops for 3 groups: primary investigators, postdocs, and PG/UG students.
- The loops extract info of each person from `_data/settings.yml`

#### publication tab

- The `_layouts/publications.html` layout defines the format of how publications are presented through an if-else for loop (the same loop in `_layouts/home.html`), which extracts paper info from `_data/publications.yml`
- The publication tab displays the full list of publications, whereas the home page only displays featured publications
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
