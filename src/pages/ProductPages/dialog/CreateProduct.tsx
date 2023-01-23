


import { useState, useEffect } from "react";
import { Dialog, Stack, Typography, Divider, Button, TextField, Select, MenuItem } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

interface Props {
    openDialog: boolean;
}

export const CreateProduct = ({ openDialog }: Props) => {
    const [open, setOpen] = useState(openDialog);
    const [products, setProducts] = useState<any[]>([]);
    const [interest, setInterest] = useState<any[]>([]);
    const [associatedServices, setAssociatedServices] = useState<any[]>([]);
    const methods = useForm();
    const { register, handleSubmit } = methods;

    const handleClose = () => {
        methods.reset({name: "", type: "", products: ""}, { keepValues: false });
        setOpen(false);
    }

    const getProductType = async (id: string) => {
        try {
            const response = await fetch(`http://127.0.0.1:8087/api/product-types/type?id=${id}`, {
                method: 'GET',
            });
            const data = await response.json();
            const productTyp = {
                id: data.id,
                name: data.name,
            }
            console.log(productTyp)
            if(productTyp.id === undefined){
                return [];
            }
            return [productTyp]
        } catch (error) {
            console.log(error);
        }
    }

    const getInterest = async () => {
        try {
            const response = await fetch(`http://localhost:8087/api/interest-rate`, {
                method: 'GET',
            });
            const data = await response.json();
            setInterest(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getAssociatedServices = async () => {
        try {
            const response = await fetch(`http://localhost:8087/api/associated-services`, {
                method: 'GET',
            });
            const data = await response.json();
            setAssociatedServices(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getProducts = async () => {
        try {
            const response = await fetch(`http://localhost:8087/api/products/products`, {
                method: 'GET',
            });
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmitForm = async (data: any) => {
        try {
            const productTyp = await getProductType(data.products);
            const typeProduct = {
                name: data.name,
                type: data.type,
                allowEarnInterest: data.allowEarnInterest,
                allowGenAccState: data.allowGenAccState,
                temporalyInterest: data.temporalyInterest,
                products: productTyp 

            }
            await fetch(`http://localhost:8087/api/product-types/types`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(typeProduct)
            })
            handleClose();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (openDialog) {
            setOpen(true);
        }
    }, [openDialog])

    useEffect(() => {
        getProducts();
        getInterest();
        getAssociatedServices();
    }, [])

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2, margin: 5 }}>
                <Stack direction="column" spacing={2} sx={{ width: "100%" }} alignItems='center'>
                    <Typography variant="h5">Crear Tipo de Producto</Typography>
                    <Divider sx={{ margin: 1, color: "black" }} />
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit((data) => handleSubmitForm(data))}>
                            <Stack direction="column" spacing={2} sx={{ width: "100%" }} alignItems='center'>
                                <Stack direction="row" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                    <Stack direction="column" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                        <Typography variant="body1">Nombre del producto</Typography>
                                        <TextField {...register("name", { required: true })} label="Nombre del producto" variant="outlined" />
                                    </Stack>
                                    <Stack direction="column" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                        <Typography variant="body1">Estado</Typography>
                                        <Select
                                            label="status"
                                            placeholder="status"
                                            variant="outlined"
                                            defaultValue={"Y"}
                                            {...register("status", { required: true })}
                                        >
                                            <MenuItem value={"ACT"}>Activo</MenuItem>
                                            <MenuItem value={"INC"}>Inactivo</MenuItem>
                                        </Select>
                                    </Stack>
                                    <Stack direction="column" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                        <Typography variant="body1">Permite ganar intereses</Typography>
                                        <Select
                                            label="allowEarnInterest"
                                            placeholder="Permite ganar intereses"
                                            variant="outlined"
                                            defaultValue={"Y"}
                                            {...register("allowEarnInterest", { required: true })}
                                        >
                                            <MenuItem value={"Y"}>Si</MenuItem>
                                            <MenuItem value={"N"}>No</MenuItem>
                                        </Select>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                    <Stack direction="column" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                        <Typography variant="body1">allowGenAccState</Typography>
                                        <Select
                                            label="allowGenAccState"
                                            placeholder="allowGenAccState"
                                            variant="outlined"
                                            defaultValue={"Y"}
                                            {...register("allowGenAccState", { required: true })}
                                        >
                                            <MenuItem value={"Y"}>Si</MenuItem>
                                            <MenuItem value={"N"}>No</MenuItem>
                                        </Select>                                    </Stack>
                                    <Stack direction="column" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                        <Typography variant="body1">Interes temporal</Typography>
                                        <Select
                                            label="Interes temporal"
                                            placeholder="Interes temporal"
                                            variant="outlined"
                                            defaultValue={""}
                                            {...register("InterestRate", { required: true })}
                                            onChange={(e) => e.target.value}
                                        >
                                            {interest.map((inter: any) => (
                                                <MenuItem id={inter.id} value={inter.name}>{inter.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </Stack>
                                    <Stack direction="column" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                        {/* <Typography variant="body1">Servicios asociados</Typography>
                                        <Select
                                            label="servicios asociados"
                                            placeholder="servicios asociados "
                                            variant="outlined"
                                            defaultValue={""}
                                            {...register("associatedService", { required: false })}
                                            onChange={(e) => e.target.value}
                                        >
                                            {associatedServices.map((associatedService: any) => (
                                                <MenuItem id={associatedService.id} value={associatedService.name}>{associatedService.name}</MenuItem>
                                            ))}
                                        </Select> */}
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={2} sx={{ width: "100%" }} justifyContent="center">
                                    <Button variant="contained" type="submit">Crear</Button>
                                    <Button variant="contained" onClick={handleClose} color="error">Cancelar</Button>
                                </Stack>
                            </Stack>
                        </form>
                    </FormProvider>
                </Stack>
            </Stack>
        </Dialog>
    )
}