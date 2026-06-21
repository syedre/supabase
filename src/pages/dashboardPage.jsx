import AddProductCategory from "@/components/addCategory";
import AddProduct from "@/components/addProduct";
import EditProducts from "@/components/editProducts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <div className="p-5">
      <Tabs defaultValue="product" className="w-full">
        <TabsList>
          <TabsTrigger value="product">Add Product </TabsTrigger>
          <TabsTrigger value="edit">Edit Products</TabsTrigger>
          <TabsTrigger value="category"> Add Category</TabsTrigger>
        </TabsList>
        <TabsContent value="product" className="w-full ">
          <AddProduct />
        </TabsContent>
        <TabsContent value="edit">
          <EditProducts />
        </TabsContent>
        <TabsContent value="category">
          <AddProductCategory />
        </TabsContent>
      </Tabs>
    </div>
  );
}
