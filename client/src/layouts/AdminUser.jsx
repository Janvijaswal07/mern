

const AdminUser = () => {
    const getUserAllData = async ()=>{
        try {
            const response =await fetch("http://localhost:3000/api/admin/user",{
                method="GET",
                headers={
                    Au
                }
            })
        } catch (error) {
            
        }
    }
  return (
    <div>AdminUser</div>
  )
}

export default AdminUser