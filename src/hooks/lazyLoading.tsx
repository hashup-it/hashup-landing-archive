import { StyledLoadingSpinner } from "components/shared/loading.styles"
import { ComponentType, useEffect, useMemo, useState } from "react"

export const useDelayedLoading = (
    DynamicComponent: ComponentType
): { readonly isLoading: boolean; readonly DelayedComponent: JSX.Element } => {
    /*
        This hook should be used to lazy-load component
        which are based on very heavy 3rd-party libraries.
    */
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (isLoading === false) {
            setTimeout(() => setIsLoading(true), 5000)
        }
    }, [isLoading])

    const DelayedComponent = useMemo(
        () => <>{isLoading ? <DynamicComponent /> : <StyledLoadingSpinner />}</>,
        [isLoading, DynamicComponent]
    )

    return { isLoading, DelayedComponent }
}