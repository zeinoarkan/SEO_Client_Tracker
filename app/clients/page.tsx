import ClientTable from "@/components/client-table";
import Search from "@/components/search";
import {CreateButton} from "@/components/button";

const Clients = () => {
  return (
    <div>
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                <Search />
                <CreateButton />
            </div>
            <ClientTable />
        </div>
    </div>
  )
}

export default Clients