function sum_to_n_a(n: number): number {
	// your code here
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum(n: number): number{
    if(n == 0) {
        return n;
    }else{
        return n + sum(n-1);
    }

}

function sum_to_n_b(n: number): number {
	return sum(n);
}

function sum_to_n_c(n: number): number {
	return n*(n+1)/2;
}