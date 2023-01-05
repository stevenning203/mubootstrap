export const nav_options: { parent_title: string, children: { label: string, dest: string }[] }[] = [
    {
        parent_title: "About Us", children: [
            {
                label: "About MU", dest: "/about"
            },
            {
                label: "Our Lessons", dest: "/lessons"
            },
            {
                label: "Programs", dest: "/programs"
            },
            {
                label: "FAQ", dest: '/faq'
            }]
    },
    {
        parent_title: "Get Involved", children: [
            {
                label: "Volunteer", dest: "/volunteer"
            },
            {
                label: "Teach", dest: "/teach"
            },
            {
                label: "Donate", dest: "/donate"
            }
        ]
    },
    {
        parent_title: "Work with Us", children: [
            {
                label: "Partner with us", dest: "/partner"
            },
            {
                label: "Contact Us", dest: "/contact"
            },
            {
                label: "Store", dest: "http://music-unbounded.creator-spring.com/"
            }
        ]
    },
    {
        parent_title: "Register", children: [
            {
                label: "Register", dest: "/register"
            }
        ]
    }
];