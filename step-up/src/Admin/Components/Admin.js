import React from 'react'

const menu = [
    { name: "Dashborad", path: "/admin" },
    { name: "Products", path: "/admin/products" },
    { name: "Customers", path: "/admin/customers" },
    { name: "Orders", path: "/admin/orders" },
    { name: "AddProduct", path: "/admin/product/create" },
    { name: "", path: " " },
]

const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("1g"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();
    const drawer = (
        <Box
            SX=
            {{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
        >
        </Box>
    )

    return (
        <div>

        </div>
    )
}

export default Admin
