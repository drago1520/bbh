import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export default function NoWebpageYetAlertDialogWrapper(
  props: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>,
) {
  return (
    <AlertDialog>
      <AlertDialogTrigger {...props} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Уеб Страницата е в разработка</AlertDialogTitle>
          <AlertDialogDescription>
            Все още страницата не е направена, но е в активен процес на
            разработка.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>ОК</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
