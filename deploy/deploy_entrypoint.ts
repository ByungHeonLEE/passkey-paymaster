import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import dotenv from 'dotenv';
dotenv.config();

const deployEntryPoint: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const provider = ethers.provider
    const from = await (await provider.getSigner()).getAddress();
    console.log('hello');

    const ret = await hre.deployments.deploy(
        'EntryPoint', {
        from,
        args: [],
        // gasLimit: 20000000,
        deterministicDeployment: process.env.SALT ?? true,
        log: true
    })
    console.log('==entrypoint addr=', ret.address)
}

export default deployEntryPoint