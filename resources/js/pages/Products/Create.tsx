
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Textarea } from "@/components/ui/textarea"
import { useForm } from '@inertiajs/react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react';
import { OctagonAlert } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a product',
        href: '/Products/Create',
    },
];

export default function Index() {
    const {data, setData, post, processing, errors} = useForm({
        
            name: '',
            price: '',
            description: '',
        
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       post(route('products.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create" />
            <div className='w-8/12 p-5'>
                {Object.keys(errors).length > 0 && (
                    <Alert>
                    <OctagonAlert />
                    <AlertDescription>
                        <ul>
                            {Object.entries(errors).map(([key, value]) => (
                                <li key={key} className="text-red-500">
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </AlertDescription>
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <div className='gap-5 mb-5 '>
                        <Label htmlFor='product name'>Name</Label>
                        <Input placeholder='Name' value={data.name} onChange={e => setData('name', e.target.value)} />
                    </div>

                   <div className='gap-5 mb-5 '>
                        <Label htmlFor='product name'>Price</Label>
                        <Input placeholder='Price' value={data.price} onChange={e => setData('price', e.target.value)} />
                    </div>

                    <div className='gap-5 mb-5 '>
                        <Label htmlFor='product description'>Product Description</Label>
                        <Textarea  placeholder='Description' value={data.description} onChange={e => setData('description', e.target.value)} />
                    </div>
                    <Button type='submit' className='m-5'>Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
