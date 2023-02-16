function solution(M, N) {
    return M >= N ? M-1 + M*(N-1) : N-1 + N*(M-1)
}