export const nav_options: { parent_title: string, children: { label: string, dest: string }[] }[] = [
    {
        parent_title: "About", children: [
            {
                label: "About Us", dest: "/about"
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
        parent_title: "More", children: [
            {
                label: "Partner with us", dest: "/partner"
            },
            {
                label: "Contact Us", dest: "/contact"
            },
            {
                label: "store", dest: "/store"
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