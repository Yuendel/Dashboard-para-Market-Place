import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { useState } from "react";
import { del } from '../../services/ApiClient';


export default function Modal({ id, token, buscarProdutos }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function stop(e) {
        e.stopPropagation();
    }

    async function removerProduto() {
        console.log('');

        try {
            const { dados, ok } = await del(`produtos/${id}`, token)

            if (!ok) {
                console.log(dados);
            }

            handleClose();
            buscarProdutos();

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div onClick={(e) => stop(e)} className={classes.container}>
            <DeleteSweepIcon
                className={classes.deleteIcon}
                onClick={handleClickOpen}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Remover produto do catálogo?
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" component="p">
                        Esta ação não poderá ser desfeita.
                    </Typography>
                </DialogContent>
                <DialogActions className={classes.botoes}>
                    <Button variant="contained" onClick={handleClose} color="primary">
                        Manter produto
                    </Button>
                    <Button variant="contained" type="submit" color="secondary" onClick={removerProduto}>
                        Remover
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}